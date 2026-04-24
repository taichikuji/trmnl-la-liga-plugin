function transform(input) {
  let isBlocked = false;

  // Ensure the payload has the 'data' array
  if (input && Array.isArray(input.data)) {

    // Loop through the array of ISP tracking records
    for (const item of input.data) {

      // Check the 'stateChanges' array for the current ISP/IP combo
      if (Array.isArray(item.stateChanges) && item.stateChanges.length > 0) {

        // Grab the absolute last entry in the array (the most recent state)
        const latestChange = item.stateChanges[item.stateChanges.length - 1];

        if (latestChange && typeof latestChange === 'object' && 'state' in latestChange) {
          // If the most recent state is 'true', a block is currently active
          if (latestChange.state === true) {
            isBlocked = true;
            break; // Stop parsing immediately to save CPU time!
          }
        }
      }
    }
  }

  // Return the tiny, compressed payload for the TRMNL screen
  return {
    is_blocked: isBlocked ? "SÍ" : "NO",
    last_update: input.lastUpdate || "Desconocido"
  };
}