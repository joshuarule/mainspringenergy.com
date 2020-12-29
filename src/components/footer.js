import React from 'react'

export default function footer() {
    return (
        <footer className="bg-ivory py-d">
            <div className="container grid grid-cols-12">
                <span className="col-span-2">svg icon mark</span>
                <div className="col-span-3">
                    <h5 className="font-bold">Contact Us</h5>
                    <a href="mailto:info@mainspringenergy.com">info@mainspringenergy.com</a>
                    <address>
                        <a href="https://maps.google.com">
                            3601 Haven Avenue<br></br>
                            Menlo Park, CA 94025
                        </a>
                        <div>
                            <a href="/privacy">Privacy Policy</a> | <a href="/terms">Term of Use</a>
                        </div>
                        <span>
                            © Mainspring Energy, Inc. 2021
                        </span>
                    </address>
                </div>
                <div className="col-span-3">
                    <h5 className="font-bold">Company</h5>
                    <ul className="list-none p-0 m-0">
                        <li><a href="/newsroom">Newsroom</a></li>
                        <li><a href="/company">Company</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>
                <div className="col-span-4">
                    <h5 className="font-bold">Follow Us</h5>
                    <ul className="list-none p-0 m-0">
                        <li><a href="/newsroom">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
