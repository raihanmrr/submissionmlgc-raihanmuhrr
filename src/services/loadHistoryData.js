import { Firestore } from '@google-cloud/firestore';

const loadHistoryData = async () => {
  const db = new Firestore({
//    keyFilename: ,
//    projectId: '',
//    databaseId: '',
  });

//  const predictCollection = db.collection('');

  const snapshot = await predictCollection.orderBy('createdAt', 'desc').get();

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    history: doc.data(),
  }));

  return { data };
};

export default loadHistoryData;