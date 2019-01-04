import {connect} from 'react-redux';
import MoviesCatalog from './MoviesCatalog';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
    loadMovies: props.loadMovies
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesCatalog);