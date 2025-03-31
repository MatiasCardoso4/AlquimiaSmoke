interface Props {
  children: React.ReactNode;
}
export const App = ({ children }: Props) => {
  return (
    <main className="m-auto flex flex-col items-center gap-8  min-h-screen bg-zinc-100 ">
      {children}
    </main>
  );
};
