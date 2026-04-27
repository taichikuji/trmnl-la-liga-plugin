function transform(input) {
  let isBlocked = false;

  if (input?.data) {
    for (const item of input.data) {
      const changes = item.stateChanges;
      if (changes?.length > 0 && changes[changes.length - 1]?.state === true) {
        isBlocked = true;
        break; // Stop parsing immediately to save CPU time!
      }
    }
  }

  // Return the tiny, compressed payload for the TRMNL screen
  return {
    is_blocked: isBlocked
  };
}
