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
import { useActuationPesudo } from './hooks/useActuationPesudo';

const ActuationPesudo = () => {
  const {
    actuations,
    loading,
    formState,
    handleMaxChange,
    handleMinChange,
    handleSaveChanges,
  } = useActuationPesudo();
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
        <Header title="Actuation" subtitle="Manage Actuation Values" />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        mb={3}
        sx={{ m: '3% 0 3% 0' }}
      >
        <Button
          onClick={handleSaveChanges}
          variant="contained"
          sx={{
            backgroundColor: colors.greenAccent[600],
            textTransform: 'capitalize',
            fontSize: '20px',
            fontWeight: 'medium',
            '&:hover': {
              backgroundColor: colors.greenAccent[800],
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
            width: 1000,
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
              <TableCell align="center">Current Pseudo Min</TableCell>
              <TableCell align="center">Set Pseudo Min</TableCell>
              <TableCell align="center">Current Pseudo Max</TableCell>
              <TableCell align="center">Set Pseudo Max</TableCell>
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
                <TableCell align="center">{row.PesudoMin}</TableCell>
                <TableCell align="center">
                  <TextField
                    autoComplete="off"
                    type="number"
                    id={row.Variable}
                    name={row.Variable}
                    fullWidth
                    label={row.Variable}
                    variant="outlined"
                    value={formState.pesudoMin[row.Variable]}
                    onChange={handleMinChange}
                    sx={{
                      '& fieldset': {
                        border: `1px solid ${colors.primary[100]} !important`,
                      },
                      '& label': {
                        color: `${colors.grey[100]} !important`,
                      },
                    }}
                  />
                </TableCell>
                <TableCell align="center">{row.PesudoMax}</TableCell>
                <TableCell align="center">
                  <TextField
                    autoComplete="off"
                    type="number"
                    id={row.Variable}
                    name={row.Variable}
                    fullWidth
                    label={row.Variable}
                    variant="outlined"
                    value={formState.pesudoMax[row.Variable]}
                    onChange={handleMaxChange}
                    sx={{
                      '& fieldset': {
                        border: `1px solid ${colors.primary[100]} !important`,
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

export default ActuationPesudo;
