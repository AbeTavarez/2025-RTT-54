interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <main
      style={{
        backgroundColor: "royalblue",
        border: "2px solid white",
        padding: "10px",
      }}
    >
      {children}
    </main>
  );
}

export default Layout;
