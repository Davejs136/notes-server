import { connect } from 'mongoose';

async function initDatabase() {
  await connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log('🔥 Database is connected');
}

export default initDatabase;
