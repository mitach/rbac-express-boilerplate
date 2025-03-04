import mongoose from 'mongoose';

const connectToDatabase = async () => {
    if (!process.env.DATABASE_URL) {
        throw new Error('Please define the DATABASE_URL environment variable insile .env file');
    }

    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL);
        
        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (error) {
        console.error('Error connecting to database:', error);

        process.exit(1);
    }
}

export default connectToDatabase;