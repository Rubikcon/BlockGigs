const timeAgo = (dateString) => {
  const now = new Date();
  const then = new Date(dateString);
  const seconds = Math.floor((now - then) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);
    if (count >= 1) {
      const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
      return rtf.format(-count, unit);
    }
  }

  return "just now";
};

export default timeAgo;
