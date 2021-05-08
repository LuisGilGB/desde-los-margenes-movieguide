import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  loadMovieDetail: props.loadMovieDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
