
# MsgFlow – Visual Messaging Flow Builder

MsgFlow is a visual tool to create and manage messaging workflows using a node-based interface. It's built with [React Flow](https://reactflow.dev/), [Jotai](https://jotai.org/) for state management, and TypeScript for type safety.

---

## Features

-  Drag-and-drop custom nodes
-  Connect nodes with handles
-  Save and load flows from `localStorage`
-  Real-time editing of node content
-  Modular architecture with React + Jotai + React Flow

---

## Tech Stack

- **React** – UI Library
- **React Flow** – Interactive node editor
- **Jotai** – Global state management
- **TypeScript** – Strong typing
- **Tailwind CSS** – Styling framework

---

## Installation

```bash
git clone https://github.com/NoOne-Cares/MsgFlow.git
cd MsgFlow
pnpm install
```

---

##  Running the Project

```bash
pnpm dev
```

Visit: [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

> Note: Project is built with **Vite** as the bundler.

---

## Folder Structure

```
src/
├── components/        # UI components like nodes and panels
├── store/             # Jotai atoms for state
├── types/             # TypeScript types
├── constants/         # Node type configs
├── workflow/          # Workflow (ReactFlow canvas)
└── App.tsx            # Main app file
```




