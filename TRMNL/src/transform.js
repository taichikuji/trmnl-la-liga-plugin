function transform(input) {
  const isBlocked =
    input?.Status === 0 &&
    Array.isArray(input?.Answer) &&
    input.Answer.length > 0;

  return { is_blocked: isBlocked };
}
