import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const ProductList: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get(
        "http://localhost:8080/api/product/allProducts"
      );
      setData(data);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  // const handleDelete = (id: number) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell(params) {
        return (
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full object-cover mr-2.5"
              src={params.row.img}
              alt="Product Picture"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "price", headerName: "Price", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="border-0 rounded-lg py-1.5 px-2.5 bg-green-500 text-white cursor-pointer mr-5">
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="text-red-500 cursor-pointer"
              // onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="flex-4">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex-4">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
