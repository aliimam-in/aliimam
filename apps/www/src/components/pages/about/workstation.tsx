export function Workstation() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="border rounded-2xl shadow-2xl p-3">
        <div
          key={"2"}
          className="border h-full w-full relative overflow-hidden rounded-md bg-card text-card-foreground"
        >
          <div className="w-full h-full overflow-hidden">
            <img
              src="/works/workstation.jpg"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
