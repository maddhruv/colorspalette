type Categories = "homepage" | "palette";

type Actions =
  | "copy-to-clipboard"
  | "click-github"
  | "click-tag"
  | "click-palette"
  | "search"
  | "click-profile"
  | "download-palette";

export interface Event {
  category: Categories;
  action: Actions;
  label: string;
  value?: number;
}

export const track = (event: Event) => {
  const params = {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  };

  if (process.env.NODE_ENV === "production") {
    (window as any).gtag("event", event.action, params);
  } else {
    console.table({ action: event.action, ...params });
  }
};
