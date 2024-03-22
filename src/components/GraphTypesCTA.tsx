import { Box, Button, useTheme } from '@mui/material';
import { tokens } from '../theme';
import { useSearchParams } from 'react-router-dom';
import { GraphTypeEnum } from '../shared/enums/graph-type.enum';

export const GraphTypesCTA = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchParams, setSearchParams] = useSearchParams();
  const graph = searchParams.get('graph') || GraphTypeEnum.SCATTER_LINE;

  const handleGraphTypeClick = (graph: GraphTypeEnum) => () => {
    setSearchParams({
      graph,
    });
  };
  return (
    <Box
      color="white"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        border: `1px solid ${colors.grey[100]}`,
        borderRadius: '10px',
        padding: '5px 7px',
        position: 'relative',
        top: '-10px',
        fontSize: '12px',
      }}
    >
      <Button
        sx={{
          fontSize: 'inherit',
        }}
        variant="text"
        color={graph === GraphTypeEnum.SCATTER ? 'secondary' : 'inherit'}
        onClick={handleGraphTypeClick(GraphTypeEnum.SCATTER)}
      >
        Scatter Plot
      </Button>
      <Box sx={{ width: '2px', height: '25px', bgcolor: colors.grey[100] }} />
      <Button
        sx={{
          fontSize: 'inherit',
        }}
        variant="text"
        color={graph === GraphTypeEnum.LINE ? 'secondary' : 'inherit'}
        onClick={handleGraphTypeClick(GraphTypeEnum.LINE)}
      >
        Line Plot
      </Button>
      <Box sx={{ width: '2px', height: '25px', bgcolor: colors.grey[100] }} />
      <Button
        sx={{
          fontSize: 'inherit',
        }}
        variant="text"
        color={graph === GraphTypeEnum.SCATTER_LINE ? 'secondary' : 'inherit'}
        onClick={handleGraphTypeClick(GraphTypeEnum.SCATTER_LINE)}
      >
        Scatter & Line Plot
      </Button>
    </Box>
  );
};
