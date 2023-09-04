import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../dummydata";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell(params) {
        return (
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full object-cover mr-2.5"
              src={params.row.avatar}
              alt="Profile Picture"
            />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="border-0 rounded-lg py-1.5 px-2.5 bg-green-500 text-white cursor-pointer mr-5">
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="text-red-500 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="flex flex-4">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
