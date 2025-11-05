import { cn } from '@/util/clsx';
import {
  Table as BaseTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

type Props = {
  columns: {
    label: string;
    className?: string;
  }[];
  data: {
    [key: string]: {
      value: string;
      className?: string;
    };
  }[];
};

const Table = ({ columns, data }: Props) => {
  return (
    <>
      <BaseTable className="hidden md:table">
        <TableHeader className="h-16">
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.label}
                className={cn('caption1 font-semibold text-[#8D918D]', column.className)}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((rowData, index) => {
            return (
              <TableRow key={index} className="h-14">
                {Object.entries(rowData).map(([key, row]) => (
                  <TableCell
                    key={key}
                    className={cn('caption1 font-medium text-label', row.className)}
                  >
                    {row.value}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </BaseTable>

      <div className="block md:hidden">
        <div className="flex flex-col gap-3">
          {data.map((rowData, rowIndex) => (
            <div
              key={rowIndex}
              className="border border-[#E8EAE8] rounded-md bg-white p-3 shadow-sm"
            >
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {Object.entries(rowData).map(([key, cell], i) => (
                  <div key={key} className="flex flex-col">
                    <span className="caption2 text-muted-foreground">
                      {columns[i]?.label ?? key}
                    </span>
                    <span className={cn('caption1 font-medium text-label', cell.className)}>
                      {cell.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
