import { Firestore } from '@google-cloud/firestore';

const loadHistoryData = async () => {
  const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'submissionmlgc-raihanmuhrr',
    databaseId: 'mlgc_bucket1',
  });

  const predictCollection = db.collection('mlgc_bucket1');

  const snapshot = await predictCollection.orderBy('createdAt', 'desc').get();

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    history: doc.data(),
  }));

  return { data };
};

export default loadHistoryData;
