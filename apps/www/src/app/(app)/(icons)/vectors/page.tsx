"use client"

import { allLogos } from "../../../../../../../packages/test/src/generated"

export default function LogosPage() {
  return (
    <div>
      {Object.entries(allLogos).map(([category, logos]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gap: 16,
            }}
          >
            {Object.entries(logos).map(([, { Component, metadata }]) => (
              <div
                key={metadata.id}
                style={{ textAlign: "center", padding: 16 }}
              >
                <Component size={48} />
                <p>{metadata.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
