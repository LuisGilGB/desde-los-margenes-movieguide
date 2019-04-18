import {connect} from 'react-redux';
import MoviesCatalog from './MoviesCatalog';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
    loadMovies: props.loadMovies,
    goToMovieDetail: props.goToMovieDetail
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesCatalog);