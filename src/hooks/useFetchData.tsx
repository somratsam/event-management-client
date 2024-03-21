import { useQuery } from "@tanstack/react-query";

const useFetchData = (queryKey, fetchUrl) => {
    const { data, isLoading, isError} = useQuery({
        queryKey,
        queryFn: async () => {
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${fetchUrl}`);
            }
            return response.json();
        }
    });

    return { data, isLoading, isError };
};

export default useFetchData;

