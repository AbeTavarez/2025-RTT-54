# 📘 TypeScript + DOM Cheat Sheet

🤖 HTML Interfaces: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

✅ Tip: Use generics like `<HTMLButtonElement>` or type casting to get auto-complete for properties.

## 🔹 1. Getting Elements
```typescript
// By ID
const heading = document.getElementById("main-title");

// By query selector (CSS selectors)
const button = document.querySelector<HTMLButtonElement>("#submit-btn");

// By class name (returns HTMLCollection)
const items = document.getElementsByClassName("list-item");

// By tag name (returns HTMLCollection)
const divs = document.getElementsByTagName("div");

// Safer: querySelectorAll returns NodeList
const links = document.querySelectorAll<HTMLAnchorElement>("a");
```

## 🔹 2. Type Casting Elements

```typescript
// Option 1: Angle Bracket
const input = <HTMLInputElement>document.getElementById("username");

// Option 2: as keyword (preferred in TSX/React)
const input2 = document.getElementById("username") as HTMLInputElement;

// Accessing value safely
if (input) {
  console.log(input.value);
}
```

## 🔹 3. Event Listeners
```typescript
const btn = document.querySelector<HTMLButtonElement>("#clickMe");

// Click event
btn?.addEventListener("click", (e: MouseEvent) => {
  console.log("Button clicked!");
  console.log(e.clientX, e.clientY); // mouse position
});

// Keyboard event
document.addEventListener("keydown", (e: KeyboardEvent) => {
  console.log("Key pressed:", e.key);
});

// Form submit event
const form = document.querySelector<HTMLFormElement>("#myForm");
form?.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault(); // prevent page reload
  console.log("Form submitted!");
});
```

### 🔹 4. Updating the DOM
```typescript
// Changing text
const heading = document.querySelector<HTMLHeadingElement>("h1");
if (heading) heading.textContent = "Hello, TypeScript!";

// Changing HTML
heading!.innerHTML = "<span style='color:red'>Hi</span>";

// Changing attributes
const link = document.querySelector<HTMLAnchorElement>("a");
if (link) link.href = "https://example.com";

// Changing styles
heading!.style.color = "blue";
heading!.style.fontSize = "24px";
```

## 🔹 5. Creating & Appending Elements
```typescript
const newDiv = document.createElement("div");
newDiv.textContent = "I was created with TypeScript!";
newDiv.classList.add("box");

// Append to body
document.body.appendChild(newDiv);

// Insert before another element
const container = document.querySelector("#container");
container?.insertBefore(newDiv, container.firstChild);
```

## 🔹 6. Classes & Attributes
```typescript
const box = document.querySelector<HTMLDivElement>(".box");

// Add/Remove/Toggle class
box?.classList.add("active");
box?.classList.remove("hidden");
box?.classList.toggle("highlight");

// Check if element has class
if (box?.classList.contains("active")) {
  console.log("Box is active");
}

// Attributes
box?.setAttribute("data-id", "123");
console.log(box?.getAttribute("data-id"));
```

## 🔹 7. Useful DOM Properties
```typescript
// Text and HTML
element.textContent; // plain text
element.innerHTML;   // includes HTML

// Size & Position
element.clientWidth;
element.clientHeight;
element.getBoundingClientRect(); // position info

// Parent/Children
element.parentElement;
element.children;
element.firstElementChild;
element.lastElementChild;

// Remove element
element.remove();
```

## 🔹 8. Common Element Types for Type Safety
 - HTMLDivElement

 - HTMLInputElement

 - HTMLButtonElement

 - HTMLFormElement

 - HTMLAnchorElement

 - HTMLImageElement

 - HTMLCanvasElement

👉 Use these with generics for better auto-complete:
```typescript
const img = document.querySelector<HTMLImageElement>("img");
img!.src = "logo.png";
```

🔹 9. Handling Null Safety
TypeScript warns you if an element might be null.

Options:
```typescript
const el = document.querySelector("h1");

// 1. Optional chaining
el?.textContent = "Updated";

// 2. If check
if (el) {
  el.textContent = "Updated safely";
}

// 3. Non-null assertion (⚠️ risky if element doesn't exist)
el!.textContent = "Updated";
```

🔹 10. Extra: Form Handling
```typescript
const form = document.querySelector<HTMLFormElement>("#loginForm");
const username = document.querySelector<HTMLInputElement>("#username");
const password = document.querySelector<HTMLInputElement>("#password");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log("User:", username?.value);
  console.log("Pass:", password?.value);
});
```