import mongoose from 'mongoose';

const connectToDatabase = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable insile .env file');
    }

    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (error) {
        console.error('Error connecting to database:', error);

        process.exit(1);
    }
}

export default connectToDatabase;