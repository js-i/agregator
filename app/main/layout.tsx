import Counter from "../reducer/page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <Counter />
        </div>
        <div className="flex-grow md:overflow-y-auto">{children}</div>
      </div>
    );
  }