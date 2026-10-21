import Link from "next/link";
import Userfooter from "../../components/Userfooter";
import styles from "../page.module.css";

const invoices = [
    { coin: "BTC", icon: "₿", status: "Completed", id: "FF-MF-3223a70067", date: "27/08/2026, 17:18:52", hash: "0x9CcC9FF46716e6f..." },
    { coin: "ETH", icon: "◆", status: "Pending", id: "FF-MF-8d0176b127", date: "26/08/2026, 12:40:18", hash: "0x8b95c2a11c..." },
    { coin: "SOL", icon: "≋", status: "Completed", id: "FF-MF-9a471a87c2", date: "24/08/2026, 09:15:03", hash: "5Jk8VwF2n..." },
    { coin: "TON", icon: "◉", status: "Completed", id: "FF-MF-62c12e18aa", date: "21/08/2026, 14:02:39", hash: "EQB3e9Qv..." },
];

export default function MissingFundsInvoicePage() {
    return (
        <div className="missing-funds-theme">
            <main className={styles.page}>
                <h1 className={styles.pageTitle}>Missing Funds</h1>
                <nav className={styles.tabs} aria-label="Missing funds type">
                    <Link className={styles.tab} href="/missing-funds">Personal</Link>
                    <Link className={`${styles.tab} ${styles.activeTab}`} href="/missing-funds/invoice" aria-current="page">
                        Invoice / Static Wallet
                    </Link>
                </nav>

                <section className={styles.requestCard} aria-label="Invoice or static wallet missing funds request">
                    <div className={styles.field}>
                        <label htmlFor="payment-link">Payment Link<span>*</span></label>
                        <input id="payment-link" value="http://192.168.1.116:3000/pay/OPTGW..." readOnly />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="invoice-transaction-hash">Transaction Hash<span>*</span></label>
                        <input id="invoice-transaction-hash" value="0x9CcC9FF46716e6f..." readOnly />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="invoice-message">Enter your message <span className={styles.optional}>(Optional)</span></label>
                        <textarea id="invoice-message" defaultValue="0x9CcC9FF46716e6f573Fa375939..." rows={3} readOnly />
                    </div>
                    <label className={styles.terms}>
                        <input type="checkbox" disabled />
                        <span>I have read and agreed to <strong>Firefox VIP Missing Funds Terms &amp; Conditions</strong></span>
                    </label>
                    <button className={styles.submit} type="button">Submit</button>
                </section>

                <section className={styles.history} aria-labelledby="invoice-history-title">
                    <h2 id="invoice-history-title" className={styles.sectionTitle}>Missing Funds History</h2>
                    <label className={styles.search}>
                        <span className={styles.visuallyHidden}>Search history</span>
                        <span className={styles.searchIcon} aria-hidden="true" />
                        <input type="search" placeholder="Search ID here..." readOnly />
                    </label>
                    <div className={styles.historyList}>
                        {invoices.map((item) => (
                            <article className={styles.historyCard} key={item.id}>
                                <div className={styles.historyTop}>
                                    <div className={styles.coin}>
                                        <span className={`${styles.coinIcon} ${styles[item.coin.toLowerCase()]}`}>{item.icon}</span>
                                        <strong>{item.coin}</strong>
                                    </div>
                                    <span className={`${styles.status} ${item.status === "Pending" ? styles.pending : styles.completed}`}>
                                        {item.status}
                                        {item.status === "Pending" && <span className={styles.chevron} aria-hidden="true" />}
                                    </span>
                                </div>
                                <div className={styles.historyMeta}>
                                    <div><span>Wallet Type</span><strong>Invoice</strong></div>
                                    <div className={styles.alignRight}><span>Submitted On</span><strong>{item.date}</strong></div>
                                </div>
                                <div className={styles.historyMeta}>
                                    <div><span>Search ID</span><strong>{item.id}</strong></div>
                                    <div className={`${styles.alignRight} ${styles.merchantId}`}><span>Merchant ID</span><strong>{item.hash}</strong></div>
                                </div>
                                <div className={styles.historyAction}>
                                    <span>Action</span>
                                    <Link href="/missing-funds/details">View Details</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Userfooter />
        </div>
    );
}
