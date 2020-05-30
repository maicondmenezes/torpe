import React, { Component }  from 'react';
import { connect }           from 'react-redux';
import { Modal, Typography } from '@material-ui/core';
import { withStyles }        from '@material-ui/core/styles';
import CircularProgressBar   from '../CircularProgressBar'
import { changeLoading }     from '../../store/actions/loading.action';

const styles = {
  progress : {
    margin  : '15px',
    padding : '15px'
  },
  modal : {
    display        : 'flex',
    flexDirections : 'column',
    justifyContent : 'center',
    alignItems     : 'center',
    height         : '100%'
  },
  paper : {
    backgroundColor : '#fff',
    padding         : '15px',
    borderRadius    : '15px',
    display         : 'flex',
    justifyContent  : 'space-around',
    alignItems      : 'center',
    flexDirections  : 'row',
    outline         : 'none'
  }

}

export class Loading extends Component {

  handleClose = () => {
    this.props.changeLoading ({
      open : false
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Modal
        className = { classes.modal }
        open = { this.props.loading.open }
        onClose = { this.handleClose }
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className = { classes.paper } >
          <CircularProgressBar
            className = { classes.progress }
            size = { 40 }
          />
          <Typography 
            variant   = 'subtitle1'
            gutterBottom
          >
            { this.props.loading.msg }
          </Typography>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  loading : state.loadingReducer  
})

const mapDispatchToProps = {
  changeLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)
              (withStyles(styles)(Loading))
