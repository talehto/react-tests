import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const SwimlaneBackground = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.column_background.default,
  flex: 1,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default SwimlaneBackground;
