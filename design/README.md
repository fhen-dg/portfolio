# Design

Designs for this portfolio live in **Figma**.

This folder holds reference artifacts — markdown files capturing Figma node IDs and visual rules at the point of implementation. They serve as lightweight documentation for agents and for future reference, not as the source of truth.

## Workflow

Components are built by feeding Figma designs into Cursor agents via the **Figma MCP**. The agent calls `get_design_context` with a node ID, receives layout, styles, and component context, and implements directly — no manual export, redline, or asset handoff involved.

## Artifacts

| File | Description |
|---|---|
| `case-summary-section.md` | Node references and visual rules for the `CaseSummarySection` component |
