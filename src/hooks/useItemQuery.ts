import { useEffect, useState } from "react";
import {
  DataStore,
  PersistentModelConstructor,
  PersistentModel,
} from "@aws-amplify/datastore";

export const useItemQuery = <T extends PersistentModel>(
  model: PersistentModelConstructor<T>,
  id: string
) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const runQuery = async () => {
    setLoading(true);

    try {
      const queryData = await DataStore.query(model, id);
      setData(queryData);
    } catch (e) {
      setError(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    void runQuery();
  }, []);

  return { loading, data, error };
};
