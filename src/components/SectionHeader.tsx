export default function SectionHeader({ label }: { label: string }) {
  return (
    <span className="font-label-scale block mb-6">
      {label}
    </span>
  );
}
