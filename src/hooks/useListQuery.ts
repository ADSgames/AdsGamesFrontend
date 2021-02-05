import { useEffect, useState } from "react";
import {
  DataStore,
  PersistentModelConstructor,
  PersistentModel,
  ProducerModelPredicate,
} from "@aws-amplify/datastore";

export const useListQuery = <T extends PersistentModel>(
  model: PersistentModelConstructor<T>,
  predicate?: ProducerModelPredicate<T>
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const runQuery = async () => {
    setLoading(true);

    try {
      const queryData = await DataStore.query(model, predicate);
      setData(queryData);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    runQuery();
  }, []);

  return { loading, data, error };
};
