export enum SuccessStatus {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,
}

export const successResponse = (value: Object | null, status = SuccessStatus.OK) => {
  if (typeof value !== "object" || value === null) {
    throw new Error("The 'value' parameter must be a non-null object.");
  }

  const data = JSON.stringify(value);

  const headers = new Headers({
    Expires: "0",
    Pragma: "no-cache",
    "Surrogate-Control": "no-store",
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  });

  return new Response(data, { status, headers: headers });
};
