import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
        maxlength: 255,
    },
    completed: {
        type: Boolean,
        default: false,
        required: true,
    },
    isEditing: {
        type: Boolean,
        default: false,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true 
});

export default mongoose.model('Task', taskSchema);
