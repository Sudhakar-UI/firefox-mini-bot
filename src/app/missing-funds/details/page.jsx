import Link from "next/link";
import Userfooter from "../../components/Userfooter";
import styles from "../page.module.css";

function DetailCard({ title, children }) {
    return (
        <section className={styles.detailCard}>
            <h2 className={styles.detailHeading}>
                <span className={styles.headingIcon} aria-hidden="true" />
                {title}
            </h2>
            {children}
        </section>
    );
}

function DetailRow({ label, children }) {
    return (
        <div className={styles.detailRow}>
            <span>{label}</span>
            <strong>{children}</strong>
        </div>
    );
}

export default function MissingFundsDetailsPage() {
    return (
        <div className="missing-funds-theme">
            <main className={`${styles.page} ${styles.detailPage}`}>
                <h1 className={styles.pageTitle}>Missing Fund Details</h1>

                <div className={styles.filterRow} aria-label="Static request filters">
                    <div className={styles.filterBox}>⌕ <span>Search ID</span></div>
                    <div className={styles.filterBox}>All Types</div>
                    <div className={styles.filterBox}>All Status</div>
                </div>

                <DetailCard title="Request Overview">
                    <p className={styles.detailSubtitle}>View transaction details and current status</p>
                    <DetailRow label="Search ID">FF-MF-3223a70067 <span className={styles.copyGlyph} /></DetailRow>
                    <DetailRow label="Wallet Type">Invoice</DetailRow>
                    <DetailRow label="Submitted Date &amp; Time">09/10/2026, 16:30:31</DetailRow>
                    <DetailRow label="Current Status"><span className={styles.pendingPill}>● Pending</span></DetailRow>
                </DetailCard>

                <DetailCard title="Transaction information">
                    <DetailRow label="Merchant ID">b9c86a83ced9d7... <span className={styles.copyGlyph} /></DetailRow>
                    <DetailRow label="Transaction Hash">b9c86a83ced9d7... <span className={styles.copyGlyph} /></DetailRow>
                    <DetailRow label="Deposit Address">...</DetailRow>
                    <DetailRow label="Coin"><span className={styles.coinValue}><span className={`${styles.coinIcon} ${styles.btc}`}>₿</span> BTC</span></DetailRow>
                    <DetailRow label="Network">BTC</DetailRow>
                    <DetailRow label="Wallet Type">Invoice</DetailRow>
                </DetailCard>

                <DetailCard title="Request Information">
                    <DetailRow label="Message">No message provided</DetailRow>
                    <DetailRow label="Transaction Hash"><span className={styles.acceptedPill}>● Accepted</span></DetailRow>
                </DetailCard>

                <DetailCard title="Request Activity &amp; Processing">
                    <div className={styles.activity}>
                        <div className={styles.activityItem}>
                            <strong>Submitted Date &amp; Time</strong>
                            <span>09/10/2026, 16:30:31</span>
                            <span>Request was submitted by the user</span>
                        </div>
                        <div className={styles.activityItem}>
                            <strong>Awaiting Review</strong>
                            <span>Awaiting review by administration</span>
                        </div>
                        <div className={styles.activityItem}>
                            <strong>Processing Remarks / Resolution Details</strong>
                            <span>Admin remarks and resolution details</span>
                        </div>
                    </div>
                </DetailCard>

                <Link href="/missing-funds" className={styles.entryLink}>Back to Missing Funds</Link>
            </main>
            <Userfooter />
        </div>
    );
}
