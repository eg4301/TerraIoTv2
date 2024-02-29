import { Avatar, Backdrop, Box, CircularProgress } from '@mui/material';
import Header from '../../components/Header';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { fetchUserAttributes, updateUserAttribute } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { uploadData, getUrl } from 'aws-amplify/storage';

export const UserProfile = () => {
  const [avatarSrc, setAvatarSrc] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  useEffect(() => {
    const getUserAttributes = async () => {
      const attributes = await fetchUserAttributes();
      if (attributes.picture) {
        const url = await getUrl({
          key: attributes.picture,
          options: {
            expiresIn: 3600,
          },
        });
        setAvatarSrc(url.url.toString());
      }
    };
    getUserAttributes();
  }, []);

  const handleFileInputChange = async (event) => {
    try {
      setIsUploading(true);
      const file = event.target.files[0];
      const result = await uploadData({
        key: `${Date.now()}-${file.name}`,
        data: file,
      }).result;
      const url = await getUrl({
        key: result.key,
        options: {
          accessLevel: 'guest',
          expiresIn: 3600,
        },
      });

      await updateUserAttribute({
        userAttribute: {
          attributeKey: 'picture',
          value: result.key,
        },
      });
      setAvatarSrc(url.url.toString());
    } catch (error) {
      console.log('Error : ', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box m="20px">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isUploading}
        //   onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Profile" subtitle="Your Information" />
      </Box>

      <label htmlFor="avatar">
        <Box
          position="relative"
          maxWidth="min-content"
          sx={{ cursor: 'pointer' }}
        >
          <input
            type="file"
            id="avatar"
            hidden
            multiple={false}
            accept="image/*"
            onChange={handleFileInputChange}
          />
          <Avatar
            src={avatarSrc}
            sx={{
              objectFit: 'cover',
              width: '140px',
              height: '140px',
            }}
          />
          <AddAPhotoIcon
            sx={{
              position: 'absolute',
              bottom: '13px',
              right: '8px',
            }}
          />
        </Box>
      </label>
    </Box>
  );
};
