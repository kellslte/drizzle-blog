export default function asyncHandler(fn: any) {
  return (req: any, res: any, next: any) => {
    fn(req, res, next).catch(next);
  };
}
