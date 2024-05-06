import React, { useEffect } from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
  RowData,
  ColumnMeta,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { nanoid } from "nanoid";
import Skeleton from "react-loading-skeleton";
import { TbDatabaseOff } from "react-icons/tb";
// import { useTranslation } from "react-i18next";


export interface CustomColumnMeta<TData extends RowData, TValue> extends ColumnMeta<TData, TValue> {
  className: string;
}

export interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T, CustomColumnMeta<T, unknown>>[];
  showFooter?: boolean;
  className?: string;
  loading?: boolean;
  onSort?: (column: any) => void;
}

const Table = React.memo(
  <T extends object>({
    className = "",
    data,
    columns,
    showFooter,
    loading,
    onSort,
  }: ReactTableProps<T>) => {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const table = useReactTable({
      data,
      columns,
      state: {
        sorting,
      },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
    });
    useEffect(() => {
      onSort && onSort(sorting);
    }, [sorting]);
    // const { t } = useTranslation();
    return (
      <div className={`xr-table-wrapper ${className}`}>
        <table className="">
          <thead className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={nanoid()}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={nanoid()}
                      {...{
                        className: header.column.getCanSort()
                          ? "cursorPoint"
                          : "",
                        // onClick: header.column.getToggleSortingHandler(),
                      }}
                      style={{
                        width: header.column.columnDef.size,
                        minWidth: header.column.columnDef.minSize,
                        maxWidth: header.column.columnDef.maxSize,

                        // textAlign: header.column.columnDef.,
                      }}
                    >
                      {/* @ts-ignore */}
                      <div className={`flex ${header.column.columnDef.meta?.headerClassName}`}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody
            className="relative"
            style={{ height: data.length === 0 && !loading ? "12em" : "" }}
          >
            {data.length === 0 && !loading ? (
              <div className="absolute inset-0 flex column alignCenter justifyCenter noDataWrapper">
                <TbDatabaseOff size="2.5em" style={{ opacity: "0.5" }} />
                {/* <h6 className="textSecondary mt3 fs-sm">{t("no_data")}</h6> */}
                <h6 className="textSecondary mt3 fs-sm">No data</h6>
              </div>
            ) : (
              ""
            )}
            {loading
              ? new Array(data.length || 5).fill(1).map((_n) => (
                  <tr key={nanoid()}>
                    {columns.map((_column) => (
                      <td
                        key={nanoid()}
                        style={{
                          width: _column.size,
                          minWidth: _column.minSize,
                          maxWidth: _column.maxSize,
                        }}
                      >
                        <Skeleton />
                      </td>
                    ))}
                  </tr>
                ))
              : table.getRowModel().rows.map((row) => (
                  <tr key={nanoid()} className="">
                    {row.getVisibleCells().map((cell) => {
                      // console.log(cell.column.columnDef);
                      return (
                      <td
                       // @ts-ignore
                        className={`ellipsisText ${cell.column.columnDef?.meta?.cellClassName}`}
                        key={nanoid()}
                        style={{
                          width: cell.column.columnDef.size,
                          minWidth: cell.column.columnDef.minSize,
                          maxWidth: cell.column.columnDef.maxSize,
                          // textAlign: header.column.columnDef.,
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )})}
                  </tr>
                ))}
          </tbody>
          {showFooter ? (
            <tfoot className="">
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={nanoid()}>
                  {footerGroup.headers.map((header) => (
                    <th
                      key={nanoid()}
                      style={{
                        width: header.column.columnDef.size,
                        minWidth: header.column.columnDef.minSize,
                        // textAlign: header.column.columnDef.,
                      }}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          ) : null}
        </table>
      </div>
    );
  }
);

export default Table;
