import {
  Box,
  Button,
  CircularProgress,
  TextField,
  useTheme,
} from '@mui/material';
import Header from '../../components/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tokens } from '../../theme';
import { useActuationMax } from './hooks/useActuationMax';

const ActuationMax = () => {
  const { actuations, loading, formState, handleChange, handleSaveChanges } =
    useActuationMax();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          color: colors.greenAccent[500],
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Max Actuation" subtitle="Miximum actuation values" />
      </Box>

      <Box display="flex" justifyContent="flex-end" mb={3}>
        <Button
          onClick={handleSaveChanges}
          variant="contained"
          sx={{
            backgroundColor: colors.greenAccent[400],
            textTransform: 'capitalize',
            fontSize: '20px',
            fontWeight: 'medium',
            right : '170px',
            top : '70px',
            '&:hover': {
              backgroundColor: colors.greenAccent[400],
            },
          }}
        >
          Apply Changes
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
        }}
      >
        <Table
          sx={{
            margin: '0 auto',
            width: 650,
            tableLayout: 'fixed',
            '& th,td': {
              fontSize: '20px',
              padding: '10px',
              lineHeight: '1.5',
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow
              sx={{
                border: '1px solid #fff !important',
                '& th': {
                  borderBottom: '1px solid #fff !important',
                },
                '& > th:not(:last-child)': {
                  borderRight: '1px solid #fff !important',
                },
              }}
            >
              <TableCell align="center">Parameter</TableCell>
              <TableCell align="center">Current Max</TableCell>
              <TableCell align="center">Set Max</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {actuations.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  border: '1px solid #fff',
                  '& > td': {
                    border: '1px solid #fff',
                  },
                }}
              >
                <TableCell align="center">{row.Variable}</TableCell>
                <TableCell align="center">{row.Max}</TableCell>
                <TableCell align="center">
                  <TextField
                    autoComplete="off"
                    type="number"
                    id={row.Variable}
                    name={row.Variable}
                    fullWidth
                    label={row.Variable}
                    variant="outlined"
                    value={formState[row.Variable]}
                    onChange={handleChange}
                    sx={{
                      '& fieldset': {
                        border: `1px solid ${colors.grey[100]} !important`,
                      },
                      '& label': {
                        color: `${colors.grey[100]} !important`,
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ActuationMax;
