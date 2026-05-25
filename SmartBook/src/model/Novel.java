package model;

public class Novel implements ReadContent {
	private String namaBuku;
	private String penerbit;
	private int tahunTerbit;
	private String penulis;
	private int jumlahHalaman;

	public Novel(String namaBuku, String penerbit, int tahunTerbit, String penulis, int jumlahHalaman) {
		super();
		this.namaBuku = namaBuku;
		this.penerbit = penerbit;
		this.tahunTerbit = tahunTerbit;
		this.penulis = penulis;
		this.jumlahHalaman = jumlahHalaman;
	}

	public String getNamaBuku() {
		return namaBuku;
	}

	public String getPenerbit() {
		return penerbit;
	}

	public int getTahunTerbit() {
		return tahunTerbit;
	}

	public String getPenulis() {
		return penulis;
	}

	public int getJumlahHalaman() {
		return jumlahHalaman;
	}

	@Override
	public void read() {
		System.out.println();
	}

	@Override
	public String getJudul() {
		return namaBuku;
	}

	@Override
	public String getDetails() {
		return "Judul: '" + namaBuku + "', ditulis oleh " + penulis + ", diterbitkan oleh " + penerbit + ", diterbitkan tahun " + tahunTerbit + 
				", total halaman " + jumlahHalaman;
	}

}
