// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     isAvailable: boolean;
//   };
const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDcyMmYxM2UwYmYyYzUxOWJjMDYwODkiLCJncm91cCI6ImdydW9wLTExIiwiaWF0IjoxNzMwNzIzMjYzLCJleHAiOjE3NjIyNTkyNjN9.H9dmzc6jOQ4WoHjpGzoBemXE9xoS_tx0yQFgrr2A7N8";

  async function getProducts() {
    const res = await fetch('https://api.react-learning.ru/products' , { 
        // cache: "no-store",
        headers: {
        Authorization: 'Bearer ' + token, 
        } 
    });
    const products = await res.json();
  
    return products;
  }
  
  export default async function Page() {
    const products = await getProducts();
    console.log(products)
    return products.products.map((product: any) => <div>{product.name}</div>);
  }