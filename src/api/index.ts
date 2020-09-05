const fetchData = async(url: string) => {
    const response = await fetch(url)
    const data = await response.json();
    if (response.status >=  400) {
        throw new Error(data);
    }
    return data;
}
export default fetchData;
