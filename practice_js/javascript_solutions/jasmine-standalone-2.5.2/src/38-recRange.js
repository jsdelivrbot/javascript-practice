function recRange(start, end) {
  // I prefer range to include the start and exclude the end. That's how
  // computer scientists do it.
  if (start == end) {
    return [];
  }

  let r = recRange(start, end - 1);
  if (start < end - 1){
      r.push(end - 1);
  }
  return r;
}