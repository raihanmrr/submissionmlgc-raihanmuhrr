import { Firestore } from '@google-cloud/firestore';

const storeData = async (id, data) => {
  const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'submissionmlgc-raihanmuhrr',
    databaseId: 'mlgc_bucket1',
  });

  const predictCollection = db.collection('mlgc_bucket1');

  return predictCollection.doc(id).set(data);
};

export default storeData;
