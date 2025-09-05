'use client';

export function ApiStatusHandler({
  isLoading,
  isError,
  error,
  isEmpty = false,
  loadingComponent = <div>Loading...</div>,
  errorComponent = <div>Error: {error?.message}</div>,
  emptyComponent = <div>No data found</div>,
  children,
}) {
  if (isLoading) return loadingComponent;
  if (isError) return errorComponent;
  if (isEmpty) return emptyComponent;
  return children;
}