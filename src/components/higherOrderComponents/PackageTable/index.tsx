
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
} from '@mui/material';
import KingBedIcon from '@mui/icons-material/KingBed';
import PeopleIcon from '@mui/icons-material/People';

const PackageTable = () => {
  const packages = [
    {
      name: 'Basic Photography Package',
      price: 'LKR 14,699',
      features: ['2 Hours Session', '20 Edited Photos', '1 Location'],
      guests: 2,
      bedType: '1 extra-large double bed or 2 single beds',
      breakfast: 'Non-refundable, Pay in advance',
    },
    {
      name: 'Premium Photography Package',
      price: 'LKR 23,500',
      features: ['4 Hours Session', '50 Edited Photos', '2 Locations'],
      guests: 4,
      bedType: '1 extra-large double bed or 2 single beds',
      breakfast: 'Non-refundable, 10% Genius discount applied',
    },
    {
      name: 'Basic Photography Package',
      price: 'LKR 14,699',
      features: ['2 Hours Session', '20 Edited Photos', '1 Location'],
      guests: 2,
      bedType: '1 extra-large double bed or 2 single beds',
      breakfast: 'Non-refundable, Pay in advance',
    },
    {
      name: 'Premium Photography Package',
      price: 'LKR 23,500',
      features: ['4 Hours Session', '50 Edited Photos', '2 Locations'],
      guests: 4,
      bedType: '1 extra-large double bed or 2 single beds',
      breakfast: 'Non-refundable, 10% Genius discount applied',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {packages.map((pkg, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {pkg.name}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Number of guests:
                    </Typography>
                    <Typography variant="body1">
                      <PeopleIcon fontSize="small" /> {pkg.guests}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Today's price:
                    </Typography>
                    <Typography variant="h6">{pkg.price}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="textSecondary">
                      Your choices:
                    </Typography>
                    <Typography variant="body1">
                      <KingBedIcon fontSize="small" /> {pkg.bedType}
                    </Typography>
                    <Typography variant="body2">{pkg.breakfast}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  Reserve
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PackageTable;
