import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js';
const TuitsModel = mongoose.model('TuitModel', tuitsSchema);
export default TuitsModel;