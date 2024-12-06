import { Firestore } from '@google-cloud/firestore';

const storeData = async (id, data) => {
  const db = new Firestore({
//    keyFilename: ,
//    projectId: '',
//    databaseId: '',
  });

//  const predictCollection = db.collection('');

  return predictCollection.doc(id).set(data);
};

export default storeData;