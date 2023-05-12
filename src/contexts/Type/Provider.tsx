import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Type, TypeContextAPI } from "./type";
import typeService from "./typeService";

const TypeContext = createContext<TypeContextAPI>({} as TypeContextAPI);
const Provider: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [types, setTypes] = useState<Type[]>([]);
  const [type, setType] = useState<Type>({
    _id: "",
    name: "",
    createdAt: undefined,
  });

  const getAllTypes = () => {
    setLoading(true);
    typeService
      .getAllType()
      .then((res) => setTypes(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const addNewType = (newType: Type) => {
    setLoading(true);
    typeService
      .addNewType(newType)
      .then((res) => {
        setType(res.data);
        setTypes((prevState) => [...prevState, res.data]);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const deleteType = (_id: string) => {
    setLoading(true);
    typeService
      .destroyType(_id)
      .then(() => {
        const arr = types.filter((item) => item._id !== _id);
        setTypes(arr);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const handleHref = (href: string) => {
    return href.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  const memoValue = useMemo(
    () => ({
      loading,
      error,
      type,
      setType,
      types,
      addNewType,
      getAllTypes,
      handleHref,
      deleteType,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [type, types, loading, error]
  );

  return (
    <TypeContext.Provider value={memoValue}>{children}</TypeContext.Provider>
  );
};

export const useType = (): TypeContextAPI => useContext(TypeContext);

export default Provider;
