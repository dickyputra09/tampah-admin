import React from "react";
import PropTypes from "prop-types";
// import ResponsiveContainer from "recharts";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// import BarChart from "./components/BarChart";
// import SimpleLineChart from "./components/SimpleLineChart";
// import SyncChart from "./components/SyncChart";
// import PieCharts from "./components/PieChart";
import ChartBank from "./ChartBankSampah";
import ChartNasabah from "./ChartNasabah";
// import { CardContent } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    // textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 2
  },
  paperChart: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paperHeader: {
    padding: theme.spacing.unit * 1.5,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={20}>
        <Grid xs={12} md={12} className={classes.paperHeader}>
          <Card>
            <CardHeader title="Welcome to TAMPAH Admin" />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <ChartBank />
            {/* <BarChart /> */}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <ChartNasabah />
          </Paper>
        </Grid>

        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            Data Transaksi Tampah Nasabah <SimpleLineChart />{" "}
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            Data sampah Nasabah <BarChart />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            Data Penjualan sampah di Bank sampah
            <SyncChart />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Data Pengguna Aplikasi Tampah Nasabah
            <PieCharts />
          </Paper>
        </Grid> */}
        {/* <Grid item xs={5}>
          <Paper className={classes.paper}>Data (9)</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
