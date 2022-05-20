import './index.css';
import state from './redux/state';
import { rerenderTree } from './render';

rerenderTree(state);