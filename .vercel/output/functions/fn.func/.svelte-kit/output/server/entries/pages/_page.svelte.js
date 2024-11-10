import { c as create_ssr_component, d as compute_rest_props, f as spread, g as escape_object, h as escape_attribute_value, i as each, v as validate_component, e as escape, j as add_attribute, b as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
/**
 * @license lucide-svelte v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Log_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    ],
    ["polyline", { "points": "16 17 21 12 16 7" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "9",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "log-out" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "search" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function getDayAsString(date) {
  let weekday;
  switch (date.getDay()) {
    case 0:
      weekday = "Sun";
      break;
    case 1:
      weekday = "Mon";
      break;
    case 2:
      weekday = "Tue";
      break;
    case 3:
      weekday = "Wed";
      break;
    case 4:
      weekday = "Thu";
      break;
    case 5:
      weekday = "Fri";
      break;
    case 6:
      weekday = "Sat";
      break;
    default:
      weekday = "???";
  }
  return weekday;
}
function getMonthAsString(date) {
  let month;
  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "???";
  }
  return month;
}
function dateToString(date) {
  return `${getDayAsString(date)} ${date.getDate()} ${getMonthAsString(date)} ${date.getFullYear()}`;
}
const LentBook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { lentTill = /* @__PURE__ */ new Date() } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.lentTill === void 0 && $$bindings.lentTill && lentTill !== void 0) $$bindings.lentTill(lentTill);
  return `<div class="border-2 border-solid border-theme-gray rounded flex flex-row justify-between w-full p-1"><p>${escape(title)}</p> <p class="text-theme-gray">${escape(dateToString(lentTill))}</p></div>`;
});
const CourseItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { leader } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.leader === void 0 && $$bindings.leader && leader !== void 0) $$bindings.leader(leader);
  return `<div class="border-2 border-solid border-theme-gray rounded flex flex-row w-full p-1"><p>${escape(title)}</p> <p class="pl-1.5 text-theme-gray">by ${escape(leader)}</p></div>`;
});
const css = {
  code: '.book-grid.svelte-3qwki1.svelte-3qwki1{display:grid;grid-template:"a"\n					"b"\n					"c"\n					"d"}.book-grid.svelte-3qwki1>.svelte-3qwki1{padding-bottom:0.5rem}.title.svelte-3qwki1.svelte-3qwki1{grid-area:title}.pages.svelte-3qwki1.svelte-3qwki1{grid-area:pages}.date.svelte-3qwki1.svelte-3qwki1{grid-area:date}.isbn.svelte-3qwki1.svelte-3qwki1{grid-area:isbn}@media(min-width: 600px){.book-grid.svelte-3qwki1.svelte-3qwki1{grid-template:"title title title"\n							"pages  date  isbn" / 1fr 2fr 2fr}}',
  map: '{"version":3,"file":"SearchInput.svelte","sources":["SearchInput.svelte"],"sourcesContent":["<style>\\n    .book-grid {\\n        display: grid;\\n        grid-template:\\n\\t\\t\\t\\t\\t\\"a\\"\\n\\t\\t\\t\\t\\t\\"b\\"\\n\\t\\t\\t\\t\\t\\"c\\"\\n\\t\\t\\t\\t\\t\\"d\\";\\n    }\\n\\n    .book-grid > * {\\n        padding-bottom: 0.5rem;\\n    }\\n\\n    .title {\\n        grid-area: title;\\n    }\\n\\n    .pages {\\n        grid-area: pages;\\n    }\\n\\n    .date {\\n        grid-area: date;\\n    }\\n\\n    .isbn {\\n        grid-area: isbn;\\n    }\\n\\n    @media (min-width: 600px) {\\n        .book-grid {\\n            grid-template:\\n\\t\\t\\t\\t\\t\\t\\t\\"title title title\\"\\n\\t\\t\\t\\t\\t\\t\\t\\"pages  date  isbn\\" / 1fr 2fr 2fr;\\n        }\\n    }\\n</style>\\n\\n<script lang=\\"ts\\">import { Search } from \\"lucide-svelte\\";\\nimport { dateToString } from \\"$lib/utils\\";\\nimport {} from \\"$lib/backendApi\\";\\nexport let placeholder = \\"\\";\\nexport let items = [];\\nlet searchText = \\"\\";\\n$: results = items.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase())).slice(0, 10);\\n<\/script>\\n\\n<div class=\\"flex flex-row gap-2 border-2 border-solid border-theme-gray p-1 rounded\\">\\n\\t<input {placeholder} bind:value={searchText} class=\\"flex-grow appearance-none outline-none\\" />\\n\\t<Search class=\\"text-theme-gray\\" />\\n</div>\\n\\n{#if searchText !== \\"\\"}\\n\\t<div class=\\"border-theme-gray border-2 p-4 flex flex-col\\">\\n\\t\\t{#if results.length === 0}\\n\\t\\t\\t<p>No results found.</p>\\n\\t\\t{/if}\\n\\t\\t{#each results as book}\\n\\t\\t\\t<div class=\\"border-b-2 border-theme-gray py-4 book-grid\\">\\n\\t\\t\\t\\t<p class=\\"bold title\\">{book.title}</p>\\n\\t\\t\\t\\t<p class=\\"pages\\">Pages: {book.numberPages}</p>\\n\\t\\t\\t\\t<p class=\\"date\\">Published: {dateToString(new Date(book.publicationDate))}</p>\\n\\t\\t\\t\\t<p class=\\"isbn\\">ISBN: {book.isbn13}</p>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n{/if}\\n"],"names":[],"mappings":"AACI,sCAAW,CACP,OAAO,CAAE,IAAI,CACb,aAAa,CAChB,GAAG;AACR,KAAK,GAAG;AACR,KAAK,GAAG;AACR,KAAK,GACD,CAEA,wBAAU,CAAG,cAAE,CACX,cAAc,CAAE,MACpB,CAEA,kCAAO,CACH,SAAS,CAAE,KACf,CAEA,kCAAO,CACH,SAAS,CAAE,KACf,CAEA,iCAAM,CACF,SAAS,CAAE,IACf,CAEA,iCAAM,CACF,SAAS,CAAE,IACf,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,sCAAW,CACP,aAAa,CAClB,mBAAmB;AAC1B,OAAO,mBAAmB,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAC7B,CACJ"}'
};
const SearchInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = "" } = $$props;
  let { items = [] } = $$props;
  let searchText = "";
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  $$result.css.add(css);
  items.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase())).slice(0, 10);
  return `<div class="flex flex-row gap-2 border-2 border-solid border-theme-gray p-1 rounded"><input${add_attribute("placeholder", placeholder, 0)} class="flex-grow appearance-none outline-none"${add_attribute("value", searchText, 0)}> ${validate_component(Search, "Search").$$render($$result, { class: "text-theme-gray" }, {}, {})}</div> ${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let name = $page.data.session?.user?.name;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-py60oj_START -->${$$result.title = `<title>Kindergarten Bookstore</title>`, ""}<!-- HEAD_svelte-py60oj_END -->`, ""} <div class="flex flex-col gap-8 p-2"><div class="text-theme-gray flex items-center gap-2 px-4 justify-between w-full"><h1 class="flex items-center gap-2"><span class="text-4xl" data-svelte-h="svelte-1m3el5n">🌴</span>
      Welcome ${escape(name)} <span class="text-4xl" data-svelte-h="svelte-1r7nd9y">😊</span></h1> <nav><ul class="flex flex-row gap-2"><li><button>${validate_component(Log_out, "LogOut").$$render($$result, { class: "inline" }, {}, {})} <span data-svelte-h="svelte-1n5zo4k">Log out</span></button></li></ul></nav></div> <div class="flex flex-col gap-2 px-4"><h2 class="relative text-lg text-theme-gray w-fit pb-2" data-svelte-h="svelte-15zirpm">Books
      <div class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-theme-pink"></div></h2> <div class="flex flex-col gap-2">${validate_component(SearchInput, "SearchInput").$$render(
    $$result,
    {
      placeholder: "Search your favorite book or topic",
      items: $page.data.books
    },
    {},
    {}
  )} ${validate_component(LentBook, "LentBook").$$render($$result, { title: "Book 1" }, {}, {})} ${validate_component(LentBook, "LentBook").$$render($$result, { title: "Book 2" }, {}, {})}</div></div> <div class="flex flex-col gap-2 px-4"><h2 class="relative text-lg text-theme-gray w-fit pb-2" data-svelte-h="svelte-2onzpe">Courses
      <div class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-theme-pink"></div></h2> <div class="flex flex-col gap-2">${validate_component(SearchInput, "SearchInput").$$render($$result, { placeholder: "Search for courses" }, {}, {})} ${validate_component(CourseItem, "CourseItem").$$render($$result, { title: "Course 1", leader: "Kati" }, {}, {})} ${validate_component(CourseItem, "CourseItem").$$render($$result, { title: "Course 2", leader: "Nico" }, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
